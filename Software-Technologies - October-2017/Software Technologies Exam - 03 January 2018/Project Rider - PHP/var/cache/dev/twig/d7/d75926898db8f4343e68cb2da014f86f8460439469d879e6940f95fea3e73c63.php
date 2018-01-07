<?php

/* project/edit.html.twig */
class __TwigTemplate_f87bd5160ece83d12b7f4659cc2b9f9000fb392b743a79100d9e32743f557ed4 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "project/edit.html.twig", 1);
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
        $__internal_6a1b0060dc978b017f39b932269f0f111ab3dcea4894e1f5fb030cdd1416e80e = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_6a1b0060dc978b017f39b932269f0f111ab3dcea4894e1f5fb030cdd1416e80e->enter($__internal_6a1b0060dc978b017f39b932269f0f111ab3dcea4894e1f5fb030cdd1416e80e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "project/edit.html.twig"));

        $__internal_8b6def9f10d4079d5a5f423816c38ed59d2b6017c5b9353d6924c66c5b43f33e = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_8b6def9f10d4079d5a5f423816c38ed59d2b6017c5b9353d6924c66c5b43f33e->enter($__internal_8b6def9f10d4079d5a5f423816c38ed59d2b6017c5b9353d6924c66c5b43f33e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "project/edit.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_6a1b0060dc978b017f39b932269f0f111ab3dcea4894e1f5fb030cdd1416e80e->leave($__internal_6a1b0060dc978b017f39b932269f0f111ab3dcea4894e1f5fb030cdd1416e80e_prof);

        
        $__internal_8b6def9f10d4079d5a5f423816c38ed59d2b6017c5b9353d6924c66c5b43f33e->leave($__internal_8b6def9f10d4079d5a5f423816c38ed59d2b6017c5b9353d6924c66c5b43f33e_prof);

    }

    // line 3
    public function block_main($context, array $blocks = array())
    {
        $__internal_e961492de62d66076675b8f4e0eda0a83e2a6a976afa3aa2fb1bcd3544cf24fa = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_e961492de62d66076675b8f4e0eda0a83e2a6a976afa3aa2fb1bcd3544cf24fa->enter($__internal_e961492de62d66076675b8f4e0eda0a83e2a6a976afa3aa2fb1bcd3544cf24fa_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "main"));

        $__internal_6d9d0f6828d49be30a5e9f0d5fa08d248bedb80d60e9ebd31ebe695a199d59e0 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_6d9d0f6828d49be30a5e9f0d5fa08d248bedb80d60e9ebd31ebe695a199d59e0->enter($__internal_6d9d0f6828d49be30a5e9f0d5fa08d248bedb80d60e9ebd31ebe695a199d59e0_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "main"));

        // line 4
        echo "<div class=\"wrapper\">
    <form class=\"project-create\" method=\"post\">
        <div class=\"create-header\">
            Delete Project
        </div>
        <div class=\"create-title\">
            <div class=\"create-title-label\">Title</div>
            <input class=\"create-title-content\" name=\"project[title]\" value=\"";
        // line 11
        echo twig_escape_filter($this->env, $this->getAttribute(($context["project"] ?? $this->getContext($context, "project")), "title", array()), "html", null, true);
        echo "\" />
        </div>
        <div class=\"create-description\">
            <div class=\"create-description-label\">Description</div>
            <textarea rows=\"3\" class=\"create-description-content\" name=\"project[description]\">";
        // line 15
        echo twig_escape_filter($this->env, $this->getAttribute(($context["project"] ?? $this->getContext($context, "project")), "description", array()), "html", null, true);
        echo "</textarea>
        </div>
        <div class=\"create-budget\">
            <div class=\"create-budget-label\">Budget</div>
            <input type=\"number\" min=\"0\" class=\"create-budget-content\" name=\"project[budget]\" value=\"";
        // line 19
        echo twig_escape_filter($this->env, $this->getAttribute(($context["project"] ?? $this->getContext($context, "project")), "budget", array()), "html", null, true);
        echo "\" />
        </div>
        <div class=\"create-button-holder\">
            <button type=\"submit\" class=\"submit-button\">Edit Project</button>
            <a type=\"button\" href=\"/\" class=\"back-button\">Back</a>
        </div>

        ";
        // line 26
        echo $this->env->getRuntime('Symfony\Bridge\Twig\Form\TwigRenderer')->searchAndRenderBlock($this->getAttribute(($context["form"] ?? $this->getContext($context, "form")), "_token", array()), 'row');
        echo "
    </form>
</div>
";
        
        $__internal_6d9d0f6828d49be30a5e9f0d5fa08d248bedb80d60e9ebd31ebe695a199d59e0->leave($__internal_6d9d0f6828d49be30a5e9f0d5fa08d248bedb80d60e9ebd31ebe695a199d59e0_prof);

        
        $__internal_e961492de62d66076675b8f4e0eda0a83e2a6a976afa3aa2fb1bcd3544cf24fa->leave($__internal_e961492de62d66076675b8f4e0eda0a83e2a6a976afa3aa2fb1bcd3544cf24fa_prof);

    }

    public function getTemplateName()
    {
        return "project/edit.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  82 => 26,  72 => 19,  65 => 15,  58 => 11,  49 => 4,  40 => 3,  11 => 1,);
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
            Delete Project
        </div>
        <div class=\"create-title\">
            <div class=\"create-title-label\">Title</div>
            <input class=\"create-title-content\" name=\"project[title]\" value=\"{{ project.title }}\" />
        </div>
        <div class=\"create-description\">
            <div class=\"create-description-label\">Description</div>
            <textarea rows=\"3\" class=\"create-description-content\" name=\"project[description]\">{{ project.description }}</textarea>
        </div>
        <div class=\"create-budget\">
            <div class=\"create-budget-label\">Budget</div>
            <input type=\"number\" min=\"0\" class=\"create-budget-content\" name=\"project[budget]\" value=\"{{ project.budget }}\" />
        </div>
        <div class=\"create-button-holder\">
            <button type=\"submit\" class=\"submit-button\">Edit Project</button>
            <a type=\"button\" href=\"/\" class=\"back-button\">Back</a>
        </div>

        {{ form_row(form._token) }}
    </form>
</div>
{% endblock %}

", "project/edit.html.twig", "C:\\Users\\Lalka\\Desktop\\PHP-Skeleton\\app\\Resources\\views\\project\\edit.html.twig");
    }
}
