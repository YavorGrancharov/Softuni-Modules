<?php

/* project/create.html.twig */
class __TwigTemplate_2a1b5d707aa72104692b6ffa1a05c4fb1e74d1bf350d67ef9d0e176233c33cfd extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "project/create.html.twig", 1);
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
        $__internal_0301803379503c6add89b8fa4d76c6a97f7fc074706a670a445f8711b044ac03 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_0301803379503c6add89b8fa4d76c6a97f7fc074706a670a445f8711b044ac03->enter($__internal_0301803379503c6add89b8fa4d76c6a97f7fc074706a670a445f8711b044ac03_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "project/create.html.twig"));

        $__internal_af7e40277d3905256cff33e8d73503771b6d08cd0dc9ae2f4bac7903f705eb41 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_af7e40277d3905256cff33e8d73503771b6d08cd0dc9ae2f4bac7903f705eb41->enter($__internal_af7e40277d3905256cff33e8d73503771b6d08cd0dc9ae2f4bac7903f705eb41_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "project/create.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_0301803379503c6add89b8fa4d76c6a97f7fc074706a670a445f8711b044ac03->leave($__internal_0301803379503c6add89b8fa4d76c6a97f7fc074706a670a445f8711b044ac03_prof);

        
        $__internal_af7e40277d3905256cff33e8d73503771b6d08cd0dc9ae2f4bac7903f705eb41->leave($__internal_af7e40277d3905256cff33e8d73503771b6d08cd0dc9ae2f4bac7903f705eb41_prof);

    }

    // line 3
    public function block_main($context, array $blocks = array())
    {
        $__internal_5c6f73581732c4d110ec1ebef04f452ae2dff7555f4a05b0cb05f698c7e6a74b = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_5c6f73581732c4d110ec1ebef04f452ae2dff7555f4a05b0cb05f698c7e6a74b->enter($__internal_5c6f73581732c4d110ec1ebef04f452ae2dff7555f4a05b0cb05f698c7e6a74b_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "main"));

        $__internal_db561e8abbc7a36ce3daa117b5d007ea28a4aa07498579b7e228714878134643 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_db561e8abbc7a36ce3daa117b5d007ea28a4aa07498579b7e228714878134643->enter($__internal_db561e8abbc7a36ce3daa117b5d007ea28a4aa07498579b7e228714878134643_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "main"));

        // line 4
        echo "<div class=\"wrapper\">
    <form class=\"project-create\" method=\"post\">
        <div class=\"create-header\">
            Create Project
        </div>
        <div class=\"create-title\">
            <div class=\"create-title-label\">Title</div>
            <input class=\"create-title-content\" name=\"project[title]\" />
        </div>
        <div class=\"create-description\">
            <div class=\"create-description-label\">Description</div>
            <textarea rows=\"3\" class=\"create-description-content\" name=\"project[description]\"></textarea>
        </div>
        <div class=\"create-budget\">
            <div class=\"create-budget-label\">Budget</div>
            <input type=\"number\" min=\"0\" class=\"create-budget-content\" name=\"project[budget]\" />
        </div>
        <div class=\"create-button-holder\">
            <button type=\"submit\" class=\"submit-button\">Create Project</button>
            <a type=\"button\" href=\"/\" class=\"back-button\">Back</a>
        </div>

        ";
        // line 26
        echo $this->env->getRuntime('Symfony\Bridge\Twig\Form\TwigRenderer')->searchAndRenderBlock($this->getAttribute(($context["form"] ?? $this->getContext($context, "form")), "_token", array()), 'row');
        echo "
    </form>
</div>
";
        
        $__internal_db561e8abbc7a36ce3daa117b5d007ea28a4aa07498579b7e228714878134643->leave($__internal_db561e8abbc7a36ce3daa117b5d007ea28a4aa07498579b7e228714878134643_prof);

        
        $__internal_5c6f73581732c4d110ec1ebef04f452ae2dff7555f4a05b0cb05f698c7e6a74b->leave($__internal_5c6f73581732c4d110ec1ebef04f452ae2dff7555f4a05b0cb05f698c7e6a74b_prof);

    }

    public function getTemplateName()
    {
        return "project/create.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  73 => 26,  49 => 4,  40 => 3,  11 => 1,);
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
    <form class=\"project-create\" method=\"post\">
        <div class=\"create-header\">
            Create Project
        </div>
        <div class=\"create-title\">
            <div class=\"create-title-label\">Title</div>
            <input class=\"create-title-content\" name=\"project[title]\" />
        </div>
        <div class=\"create-description\">
            <div class=\"create-description-label\">Description</div>
            <textarea rows=\"3\" class=\"create-description-content\" name=\"project[description]\"></textarea>
        </div>
        <div class=\"create-budget\">
            <div class=\"create-budget-label\">Budget</div>
            <input type=\"number\" min=\"0\" class=\"create-budget-content\" name=\"project[budget]\" />
        </div>
        <div class=\"create-button-holder\">
            <button type=\"submit\" class=\"submit-button\">Create Project</button>
            <a type=\"button\" href=\"/\" class=\"back-button\">Back</a>
        </div>

        {{ form_row(form._token) }}
    </form>
</div>
{% endblock %}", "project/create.html.twig", "C:\\Users\\Lalka\\Desktop\\PHP-Skeleton\\app\\Resources\\views\\project\\create.html.twig");
    }
}
