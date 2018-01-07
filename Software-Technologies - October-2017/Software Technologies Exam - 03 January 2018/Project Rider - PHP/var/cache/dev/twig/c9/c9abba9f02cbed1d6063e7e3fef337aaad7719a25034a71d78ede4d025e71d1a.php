<?php

/* project/index.html.twig */
class __TwigTemplate_9dd928d8e8464e06dc542ea53f6838e6a8896e0ce25a52ee4992d67c2de7888c extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "project/index.html.twig", 1);
        $this->blocks = array(
            'main' => array($this, 'block_main'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_430ec6101bf7f65565abe17c321a0405517473b448f273aabb3b25e4abd90a70 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_430ec6101bf7f65565abe17c321a0405517473b448f273aabb3b25e4abd90a70->enter($__internal_430ec6101bf7f65565abe17c321a0405517473b448f273aabb3b25e4abd90a70_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "project/index.html.twig"));

        $__internal_59a24391e506efc85d18482b4f39522a45eef7b480ffa2edff0cab733e87f9ac = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_59a24391e506efc85d18482b4f39522a45eef7b480ffa2edff0cab733e87f9ac->enter($__internal_59a24391e506efc85d18482b4f39522a45eef7b480ffa2edff0cab733e87f9ac_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "project/index.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_430ec6101bf7f65565abe17c321a0405517473b448f273aabb3b25e4abd90a70->leave($__internal_430ec6101bf7f65565abe17c321a0405517473b448f273aabb3b25e4abd90a70_prof);

        
        $__internal_59a24391e506efc85d18482b4f39522a45eef7b480ffa2edff0cab733e87f9ac->leave($__internal_59a24391e506efc85d18482b4f39522a45eef7b480ffa2edff0cab733e87f9ac_prof);

    }

    // line 3
    public function block_main($context, array $blocks = array())
    {
        $__internal_01378c232efe0db6836e4f3ab4d3b56c8413bab41a1d6e17a794ccf7c80e3c45 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_01378c232efe0db6836e4f3ab4d3b56c8413bab41a1d6e17a794ccf7c80e3c45->enter($__internal_01378c232efe0db6836e4f3ab4d3b56c8413bab41a1d6e17a794ccf7c80e3c45_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "main"));

        $__internal_5fb71f3d28c9a2fbc539af36083dc0460f81000caedfc7e4eafb76adf19bbc77 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_5fb71f3d28c9a2fbc539af36083dc0460f81000caedfc7e4eafb76adf19bbc77->enter($__internal_5fb71f3d28c9a2fbc539af36083dc0460f81000caedfc7e4eafb76adf19bbc77_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "main"));

        // line 4
        echo "<div class=\"wrapper\">
    <div class=\"button-holder\">
        <a type=\"button\" href=\"/create\" class=\"log-button\">Create New Project</a>
    </div>
    <div class=\"content\">
        <div class=\"header\">
            <div class=\"project-label\">Project</div>
            <div class=\"budget-label\">Budget</div>
            <div class=\"actions-label\">Actions</div>
        </div>
        <div class=\"main\">
            ";
        // line 15
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["projects"] ?? $this->getContext($context, "projects")));
        foreach ($context['_seq'] as $context["_key"] => $context["project"]) {
            // line 16
            echo "                <div class=\"project\">
                    <div class=\"project-title\">
                        ";
            // line 18
            echo twig_escape_filter($this->env, $this->getAttribute($context["project"], "title", array()), "html", null, true);
            echo "
                    </div>
                    <div class=\"project-budget\">
                        ";
            // line 21
            echo twig_escape_filter($this->env, $this->getAttribute($context["project"], "budget", array()), "html", null, true);
            echo "
                    </div>
                    <div class=\"project-actions\">
                        <a type=\"button\" href=\"";
            // line 24
            echo twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("edit", array("id" => $this->getAttribute($context["project"], "id", array()))), "html", null, true);
            echo "\" class=\"edit-button\">Edit</a>
                        <a type=\"button\" href=\"";
            // line 25
            echo twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("delete", array("id" => $this->getAttribute($context["project"], "id", array()))), "html", null, true);
            echo "\" class=\"delete-button\">Delete</a>
                    </div>
                </div>
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['project'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 29
        echo "        </div>
    </div>
</div>
";
        
        $__internal_5fb71f3d28c9a2fbc539af36083dc0460f81000caedfc7e4eafb76adf19bbc77->leave($__internal_5fb71f3d28c9a2fbc539af36083dc0460f81000caedfc7e4eafb76adf19bbc77_prof);

        
        $__internal_01378c232efe0db6836e4f3ab4d3b56c8413bab41a1d6e17a794ccf7c80e3c45->leave($__internal_01378c232efe0db6836e4f3ab4d3b56c8413bab41a1d6e17a794ccf7c80e3c45_prof);

    }

    public function getTemplateName()
    {
        return "project/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  96 => 29,  86 => 25,  82 => 24,  76 => 21,  70 => 18,  66 => 16,  62 => 15,  49 => 4,  40 => 3,  11 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends \"base.html.twig\" %}

{% block main %}
<div class=\"wrapper\">
    <div class=\"button-holder\">
        <a type=\"button\" href=\"/create\" class=\"log-button\">Create New Project</a>
    </div>
    <div class=\"content\">
        <div class=\"header\">
            <div class=\"project-label\">Project</div>
            <div class=\"budget-label\">Budget</div>
            <div class=\"actions-label\">Actions</div>
        </div>
        <div class=\"main\">
            {% for project in projects %}
                <div class=\"project\">
                    <div class=\"project-title\">
                        {{ project.title }}
                    </div>
                    <div class=\"project-budget\">
                        {{ project.budget }}
                    </div>
                    <div class=\"project-actions\">
                        <a type=\"button\" href=\"{{ path('edit', {id: project.id}) }}\" class=\"edit-button\">Edit</a>
                        <a type=\"button\" href=\"{{ path('delete', {id: project.id}) }}\" class=\"delete-button\">Delete</a>
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
</div>
{% endblock %}", "project/index.html.twig", "C:\\Users\\Lalka\\Desktop\\PHP-Skeleton\\app\\Resources\\views\\project\\index.html.twig");
    }
}
